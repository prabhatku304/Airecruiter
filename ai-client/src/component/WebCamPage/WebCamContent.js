import React,{useCallback, useRef, useState, useEffect} from 'react';
import WebCam from 'react-webcam'



const WebCamContent = (props)=>{

    const webRef = useRef(null);
    const mediaRef = useRef(null);
    const [isCapture, setCapture] = useState(false)
    const [recordedData, setData] = useState([])

   

    const checkStartRecording = ()=>{
          if(window.confirm('Start Recording')){
              console.log('true')
              CaptureVideoCallback()
          }
          return false
    }

    const CaptureVideoCallback = useCallback(()=>{
        setCapture(true)
       
            mediaRef.current = new MediaRecorder(webRef.current.stream,{
                mimeType: 'video/webm'
            })
            
            mediaRef.current.addEventListener(
                'dataavailable',
                handleDataAvailable
            )

            mediaRef.current.start()
            console.log(mediaRef.current)

       

    },[webRef, setCapture, mediaRef])
    

    const handleDataAvailable = useCallback(({data})=>{
                if(data.size > 0){
                    console.log(data)
                    setData((prev)=> prev.concat(data))
                }
    },[setData])

    const handleStopCapture = useCallback(()=>{
        mediaRef.current.stop();
        setCapture(false);
    }, [mediaRef, webRef, setCapture])

    const handleUpload = useCallback(()=>{
        
        
        handleStopCapture()
        
        if(recordedData.length){
            const blob = new Blob(recordedData,{
                type: 'video/webm'
            })
            const url = URL.createObjectURL(blob)
            console.log(url)
            window.URL.revokeObjectURL(url)
            setData([])
        }
    },[recordedData])
    return(
        <>
        <WebCam
         audio={true}
         ref={webRef}
        />
        <button onClick={checkStartRecording}>Start</button>
        <button onClick={handleStopCapture}>Stop</button>
        <button className="btn btn-primary" onClick={handleUpload}>Submit</button>
        </>
    )

}

export {WebCamContent}