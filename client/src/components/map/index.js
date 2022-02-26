/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Map = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            style={{ borderRadius: "8px", border: 0 }}
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=AL-UMER%20HIGH%20SCHOOL%20DEFENCE%20ROAD%20(S.I.E)%20SIALKOT%20Sialkot,%20Punjab,%20Pakistan-51310&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
