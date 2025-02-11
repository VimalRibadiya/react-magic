import React from "react";
import Faq from "react-faq-component";
import { MdPadding } from "react-icons/md";

const Faq_section = () => {
  const data = {
    rows: [
      {
        title: "How long do your magic shows typically last?",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Can you perfomances for special events?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Do you travel for shows?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
    ],
  };
  const styles = {
    bgColor: 'cadetblue',
    rowTitleColor: "white",
    rowContentColor: 'white',
    arrowColor: "white",
  };

  return (
    <>
      <div className="faq-main">
        <div className="container">
          <div className="faq-inner">
            <div className="faq-title"> 
              <p>FAQ</p>
              <h2>
                Got a question? We're here to answer! If <br /> you don't see
                your question here.
              </h2>
            </div>
            <div className="faq-content">
              <div className="faq-data">
                <Faq data={data} styles={styles} />
              </div>
              <div className="faq-img">
                <img src="/react-magic/assets/images/faq-img.png" alt="faq-img.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Faq_section;
