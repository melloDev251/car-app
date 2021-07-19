import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils";
import { UidContext } from "../AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import CardComment from "./CardComment";

const Card = ({ car, key }) => {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.usersReducer);

  const [com, setCom] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const uid = useContext(UidContext);

  useEffect(() => {
    if (car.comments.includes(uid)) {
      setCom(true);
    }
  }, [uid, com, car.comments]);

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-container" key={car._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin fa-2x"></i>
      ) : (
        <>
          <div className="card-left"></div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
     
                <h3>
                  {car.mark}
                  <hr
                    style={{
                      color: "blue",
                      border: "1px solid",
                      width: "100px",
                    }}
                  />
                  <br />

                  <p> {car.description} </p>
                  {/* <p>
                    {" "}
                    {car.comments.map((com) => (
                      <>
                        <h1> {com.commenterPseudo} </h1>
                        <textarea name="" id="" cols="30" rows="10">
                          {com.text}
                        </textarea>
                      </>
                    ))}{" "}
                  </p> */}
                </h3>
              </div>
            </div>
            <div className="card-footer">
              <div className="comment-icon">
                {uid === null && (
                  <>
                    <span> {car.comments.length} </span>
                    <Popup
                      trigger={
                        <img src="./img/icons/message1.svg" alt="comment" />
                      }
                      position={[
                        "bottom center",
                        "bottom right",
                        "bottom left",
                      ]}
                      closeOnDocumentClick
                    >
                      <div>Connectez vous pour commenter !</div>
                    </Popup>
                  </>
                )}

                {uid && (
                  <>
                    <span> {car.comments.length} </span>
                    <img
                      onClick={() => setShowComments(!showComments)}
                      src="./img/icons/message1.svg"
                      alt="comment"
                    />
                  </>
                )}
              </div>
              <h5>
                <img src="./img/icons/heart.svg" alt="comment" />
              </h5>
              <img src="./img/icons/share.svg" alt="" />
            </div>
            {showComments && <CardComment car={car} key={car._id} />}
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
