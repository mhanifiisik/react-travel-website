import React from "react";
import ReactPageScroller from "react-page-scroller";
import DestinationPage from "./DestinationPage";
import Home from "../Components/Home";
import grc1 from "../Assets/greece.jpg";
import grc2 from "../Assets/greece2.jpg";
import peru1 from "../Assets/ica.jpg";
import peru2 from "../Assets/peru2.jpg";
import newzel1 from "../Assets/newzel.jpg";
import newzel2 from "../Assets/newzel2.jpg";

const Scroller = () => {
  return (
    <>
      <ReactPageScroller ref={(c) => (this.reactPageScroller = c)}>
        <Home />
        <DestinationPage
          title="Discover the most beautiful spots in the Greece"
          text="With the passage of time the island may have changed, but we can still feel the spirit of a distant glorious past. Its rich multi-cultural heritage, its historic monuments, its stunning natural landscape, its crystal clear seas, and its excellent weather all year round explain why Greece is one of the most cosmopolitan Mediterranean destinations weaving a powerful spell on its visitors."
          image1={grc1}
          image2={grc2}
          flipped={true}
        />
        <DestinationPage
          title="Peru Ica A desert, filled with experiences"
          text="The vast Ica desert offers a wealth of experiences. Let’s begin with the most well-known: boat rides to the Ballestas Islands, a flight over the Nasca Lines, a lakeside afternoon at the Huacachina oasis, sandboarding, or a luxurious picnic in the desert. What do these experiences have in common? Nothing! Every experience in Ica is remarkable and unique."
          image1={peru1}
          image2={peru2}
          flipped={false}
        />
        <DestinationPage
          title="Make New Zealand your NEXT ultimate vacation!"
          text="Across New Zealand, you can find everything from untamed wilderness to rich culture. Find inspiration in towering mountains and mist-cloaked fjords. Serenity in golden beaches curled around quiet bays. New friends in small towns with big doses of laid-back charm."
          image1={newzel1}
          image2={newzel2}
          flipped={true}
        />
      </ReactPageScroller>
    </>
  );
};

export default Scroller;
