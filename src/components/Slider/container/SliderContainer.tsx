import Slider from '../Slider';
import images from '../assets/images';
import { useCallback, useState } from 'react';

const SliderContainer = () => {
  const imgArr = [
    { pic: images.exImage1, id: 1 },
    { pic: images.exImage2, id: 2 },
    { pic: images.exImage3, id: 3 },
    { pic: images.exImage4, id: 4 },
    { pic: images.exImage5, id: 5 },
  ];

  const [translateValue, setTranslateValue] = useState<number>(0);

  const onMoveLeft = useCallback(() => {
    if (translateValue !== 0) {
      setTranslateValue((prev) => prev - 70);
    } else {
      setTranslateValue(70 * (imgArr.length - 1));
    }
    console.log(translateValue);
  }, [translateValue]);

  const onMoveRight = useCallback(() => {
    if (translateValue !== 70 * (imgArr.length - 1)) {
      setTranslateValue((prev) => prev + 70);
    } else {
      setTranslateValue(0);
    }
    console.log(translateValue);
  }, [translateValue]);

  return (
    <Slider
      imgArr={imgArr}
      onMoveLeft={onMoveLeft}
      onMoveRight={onMoveRight}
      translateValue={translateValue}
    />
  );
};

export default SliderContainer;
