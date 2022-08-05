import { Children, FC, ReactNode, useMemo } from 'react';
import { CardTextProps } from './types';
import { SpecialCharacter, Text } from './styles';

const specialCharacterRegexp = /\[.*?\]/g;

const CardText: FC<CardTextProps> = ({
  outline,
  color = 'black',
  children,
  ...props
}) => {
  // TODO: Allow for more types of formatting (like italic)
  const content = useMemo<ReactNode>(
    () =>
      Children.map(children, child => {
        // Only format strings, not elements
        if (typeof child !== 'string') return child;
        // Check if there are any [special characters] present
        const specialCharacters = child.match(specialCharacterRegexp);
        if (!specialCharacters || specialCharacters.length === 0) return child;
        // Make an array of all [special characters], without their indicators ([])
        const characters: string[] = specialCharacters.map(char =>
          char.replace('[', '').replace(']', ''),
        );
        // Make an array of all content split where the [special characters] should be
        const withoutSpecialCharacters = child.split(specialCharacterRegexp);
        // Insert the [special characters] back in place with a new style
        const contentChild: ReactNode[] = [];
        withoutSpecialCharacters.forEach((element, i) => {
          contentChild.push(element);
          if (characters.length <= i || characters[i].length > 1) return;
          contentChild.push(
            <SpecialCharacter>{characters[i]}</SpecialCharacter>,
          );
        });
        return contentChild;
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
