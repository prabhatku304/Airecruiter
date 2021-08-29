import React from "react";
import { Test } from "./PersonalityTestComponent";
import { useDispatch, useSelector } from "react-redux";
import { personalityTestSubmitAction } from "../../../redux/action/userTest";
import { useParams } from "react-router";
import { PageSpinner } from "../../UserProfile/PageSpinner";

const tempData = [
  {
    code: "ISTJ",
    title: "Doing What to be done",
    description: "Inspector",
    professional_field: [
      "Dentist",
      "Certified public accountant",
      "Supply chain manager",
      "Bussiness analyst",
    ],
  },
  {
    code: "INFJ",
    title: "An Inspiration to others",
    description: "Counselor",
    professional_field: [
      "Counselor",
      "Writer",
      "Scientist",
      "Librarian",
      "Psycologist",
    ],
  },
  {
    code: "INTJ",
    title: "Everything has room for improvemnt",
    description: "Mastermind",
    professional_field: [
      "Musical performer",
      "Managing editor",
      "Photographer",
      "Financial advisor",
      "Marketing manager",
      "Teacher",
      "Physical therapist",
    ],
  },
  {
    code: "ENFJ",
    title: "Smooth talking persuader",
    description: "Giver",
    professional_field: [
      "Guidance counselor",
      "Sales manager",
      "HR director",
      "Art director",
      "Public relations manager",
    ],
  },
  {
    code: "ISTP",
    title: "Ready to try anything once",
    description: "Craftsman",
    professional_field: [
      "Technician",
      "Construction worker",
      "Engineer",
      "Forensic scientist",
      "Inspector",
    ],
  },
  {
    code: "ESFJ",
    title: "Host and Hostesses of the world",
    description: "Provider",
    professional_field: [
      "Office manager",
      "Technical support specialist",
      "Museum curator",
      "Psychologist",
      "Medical researcher",
    ],
  },
  {
    code: "INFP",
    title: "Performing nobel service to aid society",
    description: "Idealist",
    professional_field: [
      "Copywriter",
      "HR manager",
      "Physical therapist",
      "Mental health professional",
      "Artist",
      "Photographer",
    ],
  },
  {
    code: "ESFP",
    title: "You go around once in life",
    description: "Performer",
    professional_field: [
      "Event planner",
      "Professional entertainer",
      "Sales representative",
      "Cosmetologist",
      "Flight attendant",
      "Tour guide",
    ],
  },
  {
    code: "ENFP",
    title: "Giving life an extra squeeze",
    description: "Champion",
    professional_field: [
      "Reporter or news anchor",
      "Editor",
      "Musician",
      "Product manager",
      "Elementary school teacher",
      "Personal trainer",
      "Social worker",
    ],
  },
  {
    code: "ESTP",
    title: "The ultimate realist",
    description: "Doer",
    professional_field: [
      "Firefighter",
      "Paramedic",
      "Creative director",
      "Project coordinator",
      "Construction manager",
    ],
  },
  {
    code: "ESTJ",
    title: "Life's Administrator",
    description: "Supervisor",
    professional_field: [
      "Judge",
      "Coach",
      "Financial officer",
      "Hotel manager",
      "Real estate agent",
    ],
  },
  {
    code: "ENTJ",
    title: "Life's Natural Leader",
    description: "Commander",
    professional_field: [
      "Business administrator",
      "Public relations specialist",
      "Mechanical engineer",
      "Judge",
      "Construction manager",
      "Astronomer",
    ],
  },
  {
    code: "INTP",
    title: "A love of problem solving",
    description: "Thinker",
    professional_field: [
      "Composer",
      "Professor",
      "Writer",
      "Producer",
      "Biomedical engineer",
      "Marketing consultant",
      "Web developer",
    ],
  },
  {
    code: "ISFJ",
    title: "A huge sense of duty",
    description: "Nurturer",
    professional_field: [
      "Accountant",
      "Financial clerk",
      "Bank teller",
      "Research analyst",
      "Administrative manager",
      "Photographer",
      "Elementary teacher",
    ],
  },
  {
    code: "ENTP",
    title: "One exciting challange after another",
    description: "Visionary",
    professional_field: [
      "Attorney",
      "Copywriter",
      "Financial planner",
      "Psychologist",
      "Systems analyst",
      "Creative director",
      "Operations specialist",
    ],
  },
  {
    code: "ISFP",
    title: "Sees much but shares little",
    description: "Composer",
    professional_field: [
      "Bookkeeper",
      "Social media manager",
      "Optician",
      "Veterinarian",
      "Archeologist",
      "Social worker",
      "Occupational therapist",
    ],
  },
];
const PersonalityTestContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const isTestSubmitPending = useSelector(
    (state) => state.test.isPersonaltyTestSubmitPending
  );
  const onSubmitPersonalityTest = async (type) => {
    console.log(type);
    const resulType = tempData.filter((ele) => ele.code === type);
    const body = {
      personality_score: resulType,
      company_job: params.jobId,
    };
    await dispatch(personalityTestSubmitAction(body, onGoBack));
  };
  const onGoBack = () => {
    setTimeout(window.close, 2000);
  };
  return (
    <section>
      <PageSpinner isLoading={isTestSubmitPending} />
      <Test onSubmitPersonalityTest={onSubmitPersonalityTest} />
    </section>
  );
};

export default PersonalityTestContainer;
