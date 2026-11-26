import Title from "../title/Title";
import { Image } from 'react-image-and-background-image-fade';
import Button from '../button/Button';

interface IInfoItem {
    title: string;
    src: string;
    alt: string;
    text: string;
    buttonText: string;
    href: string;
}

const InfoItem = ({title, src, alt, text, buttonText, href}: IInfoItem) => {
  return (
     <div className="border-border-component bg-bg-surface hidden flex-1 rounded-md border md:block">
          <Title level={3} className="py-4 text-center">
            {title}
          </Title>
          <div className="flex flex-col items-center gap-4 p-4 pt-0 sm:flex-row sm:items-start">
            <div className="flex-1 rounded-md dark-neon-border">
              <Image
                src={src}
                alt={alt}
                fit="cover"
                placeholder="skeleton"
                fadeType="zoom-blur"
                className="w-full max-w-full shrink-0 rounded-md"
              />
            </div>
            <p className="min-w-0 flex-1 hyphens-auto sm:text-left">
              {text}
            </p>
          </div>
          <div className="flex justify-end p-4">
            <Button variant="link" href={href}>
              {buttonText}
            </Button>
          </div>
        </div>
  )
}

export default InfoItem