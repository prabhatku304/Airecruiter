#!/usr/bin/env python
# coding: utf-8

# In[ ]:




import math
import sys
import pandas as pd
import numpy as np
from nltk.corpus import stopwords 
from nltk.stem import WordNetLemmatizer
lemmatizer = WordNetLemmatizer()
import nltk
nltk.download('stopwords')
nltk.download('wordnet')

sw = stopwords.words('english') 


# In[ ]:


skills = sys.argv[1]
exp = sys.argv[2]
JD = sys.argv[3]
# skills='Machine Learning with Python learning test supermen';
# exp ='Issue Handling of the bank clients is too much hard to regarding their account, i am a team leader'; 
#JD=' i need need a machine learning team leader who has supermen powers';
resume= skills+' '+exp;
resume=' '.join(dict.fromkeys(resume.split()))
JD=' '.join(dict.fromkeys(JD.split()))

Y_set = [lemmatizer.lemmatize(w).lower() for w in resume.split() if not w in sw]
# function to predict n most similar words using word2vec model
r1 = [item.replace("\n", "") for item in Y_set]
r1=' '.join(r1)

X_set = [lemmatizer.lemmatize(w).lower() for w in JD.split() if not w in sw]
jd = [item.replace("\n", "") for item in X_set]
jd=' '.join(jd)
# print(jd)


# In[ ]:


#Normalized Term Frequency
def termFreq(term, document):
    normalizeDocument = document.lower().split()
    return normalizeDocument.count(term.lower()) / float(len(normalizeDocument))

def normalizedtf(documents):
    tf_doc = []
    for txt in documents:
        sentence = txt.split()
        norm_tf= dict.fromkeys(set(sentence), 0)
        for word in sentence:
            norm_tf[word] = termFreq(word, txt)
        tf_doc.append(norm_tf)
        df = pd.DataFrame([norm_tf])
        idx = 0
        new_col = ["Normalized TF"]    
        df.insert(loc=idx, column='Document', value=new_col)
        # print(df)
    return tf_doc

tf_doc = normalizedtf([r1])


# In[ ]:


def invDocFreq(term, allDocuments):
    numDocumentsWithThisTerm = 0
    for doc in range (0, len(allDocuments)):
        if term.lower() in allDocuments[doc].lower().split():
            numDocumentsWithThisTerm = numDocumentsWithThisTerm + 1
 
    if numDocumentsWithThisTerm > 0:
        return 1.0 + math.log(float(len(allDocuments)) / numDocumentsWithThisTerm)
    else:
        return 1.0
    
def comp_idf(documents):
    idf_dict = {}
    for doc in documents:
        sentence = doc.split()
        for word in sentence:
            idf_dict[word] = invDocFreq(word, documents)
    return idf_dict
idf_dict = comp_idf([r1])

comp_idf([r1])


# In[ ]:


# tf-idf score across all docs 
def comp_tfidf_forall(documents , query):
    tf_idf = []
    index = 0
    query_tokens = query.split()
    df = pd.DataFrame(columns=['doc'] + query_tokens)
    for doc in documents:
        df['doc'] = np.arange(0 , len(documents))
        doc_num = tf_doc[index]
        sentence = doc.split()
        for word in sentence:
            for text in query_tokens:
                if(text == word):
                    idx = sentence.index(word)
                    tf_idf_score = doc_num[word] * idf_dict[word]
                    tf_idf.append(tf_idf_score)
                    df.iloc[index, df.columns.get_loc(word)] = tf_idf_score
        index += 1
    df.fillna(0 , axis=1, inplace=True)
    return tf_idf , df
            
documents = [r1]
tf_idf , df = comp_tfidf_forall(documents , jd)
# print(df)


# In[ ]:


def comp_query_tf(query):
    query_norm_tf = {}
    tokens = query.split()
    for word in tokens:
        query_norm_tf[word] = termFreq(word , query)
    return query_norm_tf
query_norm_tf = comp_query_tf(jd)
# print(query_norm_tf)


# In[ ]:


def comp_query_idf(query):
    idf_dict_qry = {}
    sentence = query.split()
    documents = [r1]
    for word in sentence:
        idf_dict_qry[word] = invDocFreq(word ,documents)
    return idf_dict_qry
idf_dict_qry = comp_query_idf(jd)
# print(idf_dict_qry)


# In[ ]:


def compquery_tfidf(query):
    tfidf_dict_qry = {}
    sentence = query.split()
    for word in sentence:
        tfidf_dict_qry[word] = query_norm_tf[word] * idf_dict_qry[word]
    return tfidf_dict_qry
tfidf_dict_qry = compquery_tfidf(jd)
# print(tfidf_dict_qry)


# In[ ]:


def cosine_similarity(tfidf_dict_qry, df , query , doc_num):
    dot_product = 0
    qry_mod = 0
    doc_mod = 0
    tokens = query.split()
   
    for keyword in tokens:
        dot_product += tfidf_dict_qry[keyword] * df[keyword][df['doc'] == doc_num]
        #||Query||
        qry_mod += tfidf_dict_qry[keyword] * tfidf_dict_qry[keyword]
        #||Document||
        doc_mod += df[keyword][df['doc'] == doc_num] * df[keyword][df['doc'] == doc_num]
    qry_mod = np.sqrt(qry_mod)
    doc_mod = np.sqrt(doc_mod)
    #implement formula
    denominator = qry_mod * doc_mod
    cos_sim = dot_product/denominator
     
    return cos_sim

from collections import Iterable
def flatten(lis):
     for item in lis:
        if isinstance(item, Iterable) and not isinstance(item, str):
             for x in flatten(item):
                yield x
        else:        
             yield item


# In[ ]:


def rank_simil(data):
    cos_sim =[]
    for doc_num in range(0 , len(data)):
        cos_sim.append(cosine_similarity(tfidf_dict_qry, df , jd , doc_num).tolist())
    return cos_sim
similarity_docs = rank_simil(r1)
score = list(flatten(similarity_docs))[0]
if(score):
    print(score*100)
else:
    print(0)


# In[ ]:




