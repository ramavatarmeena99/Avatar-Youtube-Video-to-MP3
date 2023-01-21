import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
// import loading from "../assests/loading.gif";
import { BiSearch } from "react-icons/bi";

export default function Center() {
  const [videoUrl, setVideoUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDownload, setIsDownload] = useState(false);

  const [disable, setDisable] = useState(false);

  // var youtubeURL = videoUrl;
  // var videoKey = youtubeURL.substr(youtubeURL.lastIndexOf("v=") + 2, 11);
  const url = (e) => {
    setVideoUrl(e.target.value);
  };

  const searchVideos = async () => {
    if (videoUrl === "") {
      alert("none");
      return;
    }
    if (!videoUrl.startsWith("http")) {
      alert("your url wrong");
      return;
    }
    setDisable(true);
    setIsLoading(true);
    setIsDownload(false)

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
        setDisable(false);

        setIsLoading(false);
        setIsDownload(true)

        console.log(res.data?.YoutubeAPI?.urlMp3); // for array found //

        setDownloadLink(res.data?.YoutubeAPI?.urlMp3);
      })
      .catch((err) => {
        setIsLoading(false);
setIsDownload(false)
        console.log("err: ", err);
      });
  };

  // const getUrl = () => {

  //   // console.log(videoKey)
  // };

  //   useEffect(() => {
  // // getApi()
  // searchVideos()
  //   }, []);

  return (
    <CenterContainer>
      <Box>
        <Top>
          <ForDots />
          <ForDots />
          <ForDots />
        </Top>
        <Bottom>
          <H1>Youtube2MP3 Online Video Downloader</H1>
          <ForSearchBox>
            <Input
              onChange={url}
              value={videoUrl}
              type="text"
              placeholder="Enter valid youtube Video url"
            />
            <SearchButton disabled={disable} onClick={searchVideos}>
              {disable ? (
                "Wait"
              ) : (
                <BiSearch
                  style={{
                    fontSize: "22px",
                    fontWeight: "900",
                    color: "white",
                  }}
                />
              )}
            </SearchButton>
          </ForSearchBox>
          {isLoading && (
             <div
             style={{
               width: "100%",
               height: "30px",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               paddingTop: "20px",
               fontSize: "20px",
               fontWeight: "700",
               lineHeight: "17px",
               color: "green",
             }}
           >
            <LoadingIcon

            
            >

            </LoadingIcon>
           </div>
            // <img
            //   style={{ width: "100px", height: "100px" }}
            //   src={loading}
            //   alt="loading"
            // />
          )}
          {isDownload && (
            <Button onClick={() => window.open(downloadLink)}>
              Download to mp3
            </Button>
          )}
        </Bottom>
      </Box>

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
const Box = styled.div`
  width: 70vw;
  height: 80%;
  border: 1px solid white;
  border-radius: 15px;
  @media (max-width: 768px) {

width: 85vw;
height:75% ;

}
`;
const ForSearchBox = styled.div`
  width: 90%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  border: none;
  background-color: white;
  padding-left: 10px;
  outline: none;
  font-size: 16px;
  @media (max-width: 768px) {

  height: 40px;

  }
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
  @media (max-width: 768px) {
    border-radius: 5px;
    width: 84%;

  height: 40px;

  }
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
  @media (max-width: 768px) {
    width:13%;
  height: 27px;

  }
  /* margin-bottom: 50px; */
`;
const Button = styled.button`
  width: 20%;
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
const LoadingIcon = styled.div`
 border: 5px solid #f3f3f3;
border-radius: 50%;
border-top: 6px solid green;
width: 35px;
height: 35px;
margin-top:10px;
display: flex;
flex-direction: row;
align-items: flex-start;
/* justify-content: center; */
-webkit-animation: spin 2s linear infinite;
animation: spin 2s linear infinite;
@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
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
  @media (max-width: 768px) {
    justify-content: flex-start;

  }
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
  @media (max-width: 768px) {
  font-size: 30px;

   padding:20px 40px ;
  }
`;



