import React, { useEffect } from 'react';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from 'react-router-dom';

const Call = () => {
  const { callId } = useParams();
  const usernam = localStorage.getItem("chat-user"); 
  const username=JSON.parse(usernam).fullName// Assume the user is already logged in and you have the username.
  useEffect(() => {
    const appId = 551036323;
    const serverSecret = "54ba855fe775bb415efae99d0443ac83";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, callId, Date.now().toString(), username);
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: document.getElementById('meeting-container'),
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall
      },
      showScreenSharingButton: false
    });
  }, [callId, username]);

  return (
    <div id="meeting-container" />
  );
}

export default Call;
