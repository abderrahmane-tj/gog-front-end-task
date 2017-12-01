import React  from 'react';
import soundtracksIcon from '../../imgs/soundtracks.png';
import storiesIcon from '../../imgs/stories.png';
import journalIcon from '../../imgs/journal.png';
import makingOfIcon from '../../imgs/making-of.png';
import wallpapersIcon from '../../imgs/wallpapers.png';
import moreIcon from '../../imgs/more.png';

export default function Goodies() {
  return (
    <div className="goodies">
      <div className="section-title"><span>Goodies available for free with Divinity Bundle</span></div>
      <div className="wrapper">
        <div className="goody">
          <div className="icon"><img src={soundtracksIcon} alt="4 soundtracks"/></div>
          <div className="short"><span>4 soundtracks</span></div>
          <div className="description"><p>Over 3 hours of award winning music from all 3 games.</p></div>
        </div>
        <div className="goody">
          <div className="icon"><img src={soundtracksIcon} alt="2 short stories"/></div>
          <div className="short"><span>2 short stories</span></div>
          <div className="description"><p>Prequel story for Divine Divinity and Beyond Divinity novella.</p></div>
        </div>
        <div className="goody">
          <div className="icon"><img src={soundtracksIcon} alt="Divinity 2 - Dev Journal"/></div>
          <div className="short"><span>Divinity 2 - Dev Journal</span></div>
          <div className="description"><p>144 pages long book, detailing story and art of Divinity 2.</p></div>
        </div>
        <div className="goody">
          <div className="icon"><img src={soundtracksIcon} alt="Making of Divinity 2"/></div>
          <div className="short"><span>Making of Divinity 2</span></div>
          <div className="description"><p>40 minutes long, profesional documentary about the development of Divinity 2.</p></div>
        </div>
        <div className="goody">
          <div className="icon"><img src={soundtracksIcon} alt="7 wallpapers"/></div>
          <div className="short"><span>7 wallpapers</span></div>
          <div className="description"><p>Beatifull, hand crafted HD wallpepers with Divine, Beyond and Divinity 2 art.</p></div>
        </div>
        <div className="goody">
          <div className="icon"><img src={soundtracksIcon} alt="...and more"/></div>
          <div className="short"><span>...and more</span></div>
          <div className="description"><p>3 manuals, 56 artworks, 5 avatars, Beyond Divinity game-guide.</p></div>
        </div>
      </div>
    </div>
  );
}