import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
const screen = Dimensions.get('screen');
export default function useDeviceOrientation() {
  const isOrientationPortrait = ({
    width,
    height
  }) => height >= width;

  const isOrientationLandscape = ({
    width,
    height
  }) => width >= height;

  const [orientation, setOrientation] = useState({
    portrait: isOrientationPortrait(screen),
    landscape: isOrientationLandscape(screen)
  });

  const onChange = ({
    screen
  }) => {
    setOrientation({
      portrait: isOrientationPortrait(screen),
      landscape: isOrientationLandscape(screen)
    });
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, [orientation.portrait, orientation.landscape]);
  return orientation;
}