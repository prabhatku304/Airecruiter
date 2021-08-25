import React from 'react';
import Recordrtc from 'recordrtc'

const AudioRecording = (props)=>{

   let recorder = null

    const StartRecording = ()=>{
          navigator.mediaDevices.getUserMedia({
                audio: true
          }).then((stream)=>{
              recorder = Recordrtc(stream, {
                  type: 'audio'
              })

              recorder.stream =stream;
              recorder.startRecording()
              console.log(recorder)

          })
    }

    const StopRecording = ()=>{
        recorder.stopRecording(()=>{
            let blob = recorder.getBlob()
            recorder.stream.stop()
            let url = URL.createObjectURL(blob)
            console.log(url)
            let dataProcess = new FormData()
            dataProcess.append('recording', blob)
        })
       
    }

    return(
        <div>
            <button onClick={StartRecording} >Start</button>
            <button onClick={StopRecording}>Stop</button>
        </div>
    )

}

export {AudioRecording}