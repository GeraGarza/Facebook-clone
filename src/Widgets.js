import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className='widget'>
      <iframe
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTeslaMotorsCorp%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
        title='tesla'
        width='340'
        height='100%'
        style={{ border: "none", overflow: "hidden" }}
        scrolling='no'
        frameborder='0'
        allowTransparency='true'
        allow='encrypted-media'
      />
    </div>
  );
}

export default Widgets;