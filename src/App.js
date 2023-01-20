import { useState } from 'react';
import './App.css';
function App() {
  const [videoUrl, setVideoUrl] = useState("")
  const [yourVideoUrl, setYourVideoUrl] = useState("")

  var youtubeURL = videoUrl;
  var videoKey = youtubeURL.substr(youtubeURL.lastIndexOf("v=") + 2, 11);
  const url = (e) => {
    setVideoUrl(e.target.value)
  }
  const getUrl = () => {
    if (!videoUrl.startsWith('http')) {
      alert("your url wrong")
      return;
    } else {
      setYourVideoUrl(videoKey)

    }
    console.log(videoKey)

  }




  return (
    <div style={{
      width: "100%", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center"

      , backgroundColor: "red"
    }} className="App">
      <input
        style={{
          width: "70%", height: "50px", display: "flex", alignItems: "center",
          justifyContent: "center"


        }}
        onChange={url} value={videoUrl} type="text" placeholder='past your url' ></input>
      <button

        style={{
          width: "10%", height: "50px", display: "flex", alignItems: "center",
          justifyContent: "center"


        }}
        onClick={getUrl}>past</button>
      <h1>{yourVideoUrl}</h1>


      {/* <Form
        style={{
          width: "100%", height: "50vh", display: "flex", alignItems: "center",
          justifyContent: "center"

          , backgroundColor: "red"
        }}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          style={{
            width: "100%", height: "100%", alignItems: "center"
          }}
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input style={{
            width: "100%", height: "50px", display: "flex", alignItems: "center",
            justifyContent: "center"


          }} />
        </Form.Item>




        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
    </div>
  );
}

export default App;
