import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Center() {
  const [videoUrl, setVideoUrl] = useState("");
  const [yourVideoUrl, setYourVideoUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  var youtubeURL = videoUrl;
  var videoKey = youtubeURL.substr(youtubeURL.lastIndexOf("v=") + 2, 11);
  const url = (e) => {
    setVideoUrl(e.target.value);
  };

  const searchVideos = async () => {
    await axios({
      method: "GET",

      url: "https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess",
      params: {
        url: videoUrl,
        format: "mp3",
        responseFormat: "json",
        lang: "en",
      },

      headers: {
        Accept: "application/json",
        "X-RapidAPI-Key": "b3a78c0f08mshc9fad7e39ad0a01p18182ejsn65e17fd3055f",

        "X-RapidAPI-Host": "t-one-youtube-converter.p.rapidapi.com",
      },
    })
      .then((res) => {
        console.log(res.data?.YoutubeAPI?.urlMp3); // for array found //

        setDownloadLink(res.data?.YoutubeAPI?.urlMp3);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  const getUrl = () => {
    if (!videoUrl.startsWith("http")) {
      alert("your url wrong");
      return;
    } else {
      setYourVideoUrl(videoKey);
    }
    // console.log(videoKey)
  };

  //   useEffect(() => {
  // // getApi()
  // searchVideos()
  //   }, []);

  return (
    <CenterContainer>
      <div
        style={{ width: "70vw", height: "80%", border: "1px solid black", borderRadius: "15px" }}
      >
        <div
          style={{ width: "100%", height: "10%", borderBottom: "1px solid black", display: "flex", alignItems: "center", flexDirection: "row", }}

        >
          <div
            style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#69a0eb", marginLeft: "12px" }}

          ></div>
          <div
            style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#69a0eb", marginLeft: "12px" }}


          ></div>   <div
            style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#69a0eb", marginLeft: "12px" }}


          ></div>
        </div>
        <Input
          onChange={url}
          value={videoUrl}
          type="text"
          placeholder="past your url"
        />
        <Button
          style={{
            marginBottom: 50,
          }}
          onClick={searchVideos}
        >
          Search
        </Button>
        <Button onClick={() => window.open(downloadLink)}>Download to mp3</Button>
      </div>

      <h1>{yourVideoUrl}</h1>
    </CenterContainer>
  );
}

const CenterContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
`;
const Input = styled.input`
  width: 70%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  width: 10%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
