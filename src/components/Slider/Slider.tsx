import React, { useRef } from 'react';
import images from './assets/images';
import './styles/slider.css';

type Props = {
  // pickIndex: number;
  imgArr: { pic: string; id: number }[];
  onMoveRight: () => void;
  onMoveLeft: () => void;
  translateValue: number;
};
const Slider = ({ imgArr, translateValue, onMoveLeft, onMoveRight }: Props) => {
  return (
    <>
      <div className='slider-root'>
        <div
          className='image-box'
          style={{ transform: `translateX(${-translateValue}vw)` }}>
          {imgArr.map((picture, idx) => {
            return (
              <img
                className='image'
                key={picture.id}
                src={picture.pic}
                alt={'img' + idx}
              />
            );
          })}
        </div>
        <div className='arrow-box'>
          <div className='left-arrow' onClick={onMoveLeft}>
            {'⬅'}
          </div>
          <div className='right-arrow' onClick={onMoveRight}>
            {'➡'}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;

{
  /* <div className='left-arrow' onClick={onMoveLeft}>
          {'⬅'}
        </div>
        <div className='right-arrow' onClick={onMoveRight}>
          {'➡'}
        </div> */
}
