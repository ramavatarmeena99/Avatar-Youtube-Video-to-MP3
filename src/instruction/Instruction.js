import React from "react";
import { instructionData } from "./InstructionData";

export default function Instruction() {
  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
        // backgroundColor: "aqua",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        // padding: "0px 200px",

        paddingTop: "20px",
        borderTop: "1px solid #e6e6e6",
      }}
    >
      {instructionData.map((item, index) => {
        return (
          <div
            style={{
              width: "250px",
              height: "250px",
              // backgroundColor: "red",

              borderRadius: "10px",
              margin: "10px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // padding: "0px 10px ",
              paddingTop: "20px",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                // backgroundColor: "blue",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: `${item.color}`,
              }}
            >
              <p
                style={{
                  fontSize: "35px",
                  fontWeight: "900",
                // backgroundColor: `${item.textColor}`,

                  color: `${item.textColor}`,
                }}
              >
                {item.id}
              </p>
            </div>

            <p
              style={{
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0px",
                textAlign: "center",
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
