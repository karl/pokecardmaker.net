import {
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  ContentPaste as ContentPasteIcon,
} from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { specialCharacters } from './data';
import {
  ExampleList,
  Monospace,
  SpecialCharacter,
  SpecialCharacterList,
  StyledFigure,
  StyledList,
} from './styles';

const TextFormattingTooltip: FC = () => {
  const [ClipboardIcon, setClipboardIcon] = useState(() => ContentPasteIcon);

  const copyBulletToClipboard = useCallback(() => {
    let timeout: NodeJS.Timeout;

    navigator.clipboard.writeText('•').then(() => {
      setClipboardIcon(() => AssignmentTurnedInIcon);
      timeout = setTimeout(
        () => setClipboardIcon(() => ContentPasteIcon),
        2000,
      );
    });

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Box mb={4}>
        <Typography variant="h5">Modifiers</Typography>
        <Typography>
          You can wrap your text with certain modifiers to style most words on
          the card, like the name and description.
        </Typography>
        <StyledFigure>
          <figcaption>Available modifiers:</figcaption>
          <StyledList>
            <li>
              <b>*Bold*</b>
            </li>
            <li>
              <i>_Italic_</i>
            </li>
            <li>
              <s>~Strikethrough~</s>
            </li>
            <li>
              <u>-Underlined-</u>
            </li>
          </StyledList>
        </StyledFigure>
      </Box>
      <Box mb={4}>
        <Typography variant="h5">Pokémon Characters</Typography>
        <Typography>
          You can also use special Pokémon characters by wrapping letters in
          [square brackets].
        </Typography>
        <Typography>
          Using lowercase and uppercase letters has different results, so make
          sure you are looking at the right characters!
        </Typography>
        <StyledFigure>
          <figcaption>These are the available characters:</figcaption>
          <SpecialCharacterList>
            {specialCharacters.map(char => (
              <li key={char}>
                <Monospace>[{char}]: </Monospace>
                <SpecialCharacter>{char}</SpecialCharacter>
              </li>
            ))}
          </SpecialCharacterList>
        </StyledFigure>
      </Box>
      <Box>
        <Typography variant="h5">Bullet Lists</Typography>
        <Typography>
          When making card with a list of options to choose from, you will want
          to use the &apos;bullet&apos; character:
        </Typography>
        <ExampleList>
          <span>Choose 1 or both:</span>
          <br />
          <span>
            • Shuffle up to 2 Pokémon from your discard pile into your deck.
          </span>
          <br />
          <span>
            • Shuffle up to 2 basic Energy cards from your discard pile into
            your deck.
          </span>
        </ExampleList>
        <Link
          component="button"
          variant="body1"
          textAlign="start"
          display="inline-flex"
          alignItems="center"
          onClick={copyBulletToClipboard}
        >
          <ClipboardIcon fontSize="inherit" sx={{ mr: 2 }} />
          <span>Click here to copy the bullet character to the clipboard</span>
        </Link>
      </Box>
    </>
  );
};

export default TextFormattingTooltip;
