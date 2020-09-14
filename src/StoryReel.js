import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import faker from "faker";

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image={faker.image.sports()}
        profileSrc={faker.image.avatar()}
        title={faker.name.firstName()}
      />
      <Story
        image={faker.image.technics()}
        profileSrc={faker.image.avatar()}
        title={faker.name.firstName()}
      />
      <Story
        image={faker.image.fashion()}
        profileSrc={faker.image.avatar()}
        title={faker.name.firstName()}
      />
      <Story
        image={faker.image.city()}
        profileSrc={faker.image.avatar()}
        title={faker.name.firstName()}
      />
      <Story
        image={faker.image.city()}
        profileSrc={faker.image.avatar()}
        title={faker.name.firstName()}
      />
    </div>
  );
}

export default StoryReel;
