import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import loading from "../assests/loading.gif";
import { BiSearch } from "react-icons/bi";

export default function Center() {
  const [videoUrl, setVideoUrl] = useState("");
  const [yourVideoUrl, setYourVideoUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  var youtubeURL = videoUrl;
  var videoKey = youtubeURL.substr(youtubeURL.lastIndexOf("v=") + 2, 11);
  const url = (e) => {
    setVideoUrl(e.target.value);
  };

  const searchVideos = async () => {
    if (videoUrl === "") {
      alert("none");
      return;
    }
    setIsLoading(true);

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
        setIsLoading(false);

        console.log(res.data?.YoutubeAPI?.urlMp3); // for array found //

        setDownloadLink(res.data?.YoutubeAPI?.urlMp3);
      })
      .catch((err) => {
        setIsLoading(false);

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
        style={{
          width: "70vw",
          height: "80%",
          border: "1px solid white",
          borderRadius: "15px",
        }}
      >
        <Top>
          <ForDots />
          <ForDots />
          <ForDots />
        </Top>
        <Bottom>
          <H1>Convert2MP3 Online Video Downloader</H1>
          <div
            style={{
              width: "80%",
              height: "55px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "9px",
              border: "none",
              backgroundColor: "white",
              paddingLeft: "10px",
              outline: "none",
              fontSize: "16px",
            }}
          >
            <Input
              onChange={url}
              value={videoUrl}
              type="text"
              placeholder="Enter valid youtube Video url"
            />
            <SearchButton onClick={searchVideos}>
              <BiSearch
                style={{ fontSize: "22px", fontWeight: "900", color: "white" }}
              />
            </SearchButton>
          </div>
          {isLoading && (
            <img
              style={{ width: "100px", height: "100px" }}
              src={loading}
              alt="loading"
            />
          )}
          {downloadLink && (
            <Button onClick={() => window.open(downloadLink)}>
              Download to mp3
            </Button>
          )}
        </Bottom>
      </div>

      {/* <h1>{yourVideoUrl}</h1> */}
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
  /* background-color: red; */
`;
const Input = styled.input`
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  border: none;

  outline: none;
  font-size: 16px;
  background-color: transparent;
`;
const SearchButton = styled.button`
  width: 8%;
  height: 35px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: green;
  border: none;
  border-radius: 5px;
  background-image: linear-gradient(
    to left top,
    #327ff2,
    #4a8cf3,
    #5f98f3,
    #72a5f2,
    #86b1f1
  );
  /* margin-bottom: 50px; */
`;
const Button = styled.button`
  width: 10%;
  height: 35px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: green;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  background-image: linear-gradient(
    to left top,
    #327ff2,
    #4a8cf3,
    #5f98f3,
    #72a5f2,
    #86b1f1
  );
  /* margin-bottom: 50px; */
`;
const Top = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const Bottom = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ForDots = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #69a0eb;
  margin-left: 12px;
`;

const H1 = styled.h1`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  padding: 10px 110px;
  color: white;
`;
