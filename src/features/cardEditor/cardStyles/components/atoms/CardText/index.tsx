import { Children, FC, ReactNode, useMemo } from 'react';
import parse, {
  Element,
  HTMLReactParserOptions,
  domToReact,
} from 'html-react-parser';
import { CardTextProps } from './types';
import { SpecialCharacter, Text } from './styles';

const parseOptions: HTMLReactParserOptions = {
  replace: domNode => {
    if (domNode instanceof Element) {
      const children = domToReact(domNode.children, parseOptions);
      switch (domNode.name) {
        case 'b':
          return <b>{children}</b>;
        case 'i':
          return <i>{children}</i>;
        case 's':
          return <s>{children}</s>;
        case 'u':
          return <u>{children}</u>;
        case 'pkm':
          return <SpecialCharacter>{children}</SpecialCharacter>;
        default:
          return null;
      }
    }
    return domNode;
  },
};

const CardText: FC<CardTextProps> = ({
  outline,
  color = 'black',
  children,
  ...props
}) => {
  const content = useMemo<ReactNode>(
    () =>
      Children.map(children, child => {
        // Only format strings, not elements
        if (typeof child !== 'string') return child;
        const contentString = child
          // Bold
          .replace(/(?:\*)(?:(?!\s))((?:(?!\*|\n).)+)(?:\*)/g, '<b>$1</b>')
          // Italic
          .replace(/(?:_)(?:(?!\s))((?:(?!\n|_).)+)(?:_)/g, '<i>$1</i>')
          // Stripethrough
          .replace(/(?:~)(?:(?!\s))((?:(?!\n|~).)+)(?:~)/g, '<s>$1</s>')
          // Underline
          .replace(/(?:--)(?:(?!\s))((?:(?!\n|--).)+)(?:--)/g, '<u>$1</u>')
          // Special Character
          .replace(/(?:\[)(?:(?!\s))((?:(?!\n|\[).)+)(?:\])/g, '<pkm>$1</pkm>');
        return parse(contentString, parseOptions);
      }),
    [children],
  );

  return (
    <Text $outline={outline} $color={color} {...props}>
      {content}
    </Text>
  );
};

export default CardText;
