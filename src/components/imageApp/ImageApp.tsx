import { easings, Image } from 'react-image-and-background-image-fade';

type IImageAppProps = React.ComponentProps<typeof Image>;

const ImageApp = ({ ...props }: IImageAppProps) => {
  return (
    <Image
      {...props}
      fit="cover"
      placeholder="skeleton"
      fadeType="scale"
      duration={900}
      easing={easings.cinematic}
      skeleton={{
        baseColor: '#100b0d',
        highlightColor: '#241014',
        accentColor: 'rgb(153 27 27 / 35%)',
        speed: 1400,
        angle: 115,
        size: '60%',
      }}
    />
  );
};

export default ImageApp;
