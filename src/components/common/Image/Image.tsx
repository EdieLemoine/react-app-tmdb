import { type FC, useState } from 'react';
import BaseImage, { type ImageProps } from 'next/image';

export const Image: FC<ImageProps> = (props) => {
  const [hasError, setHasError] = useState(false);

  const errorHandler = () => {
    setHasError(true);
  };

  if (hasError) {
    return null;
  }

  return (
    <>
      <BaseImage
        {...props}
        onError={errorHandler}
      />
    </>
  );
};
