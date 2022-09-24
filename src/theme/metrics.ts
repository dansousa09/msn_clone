import { mediaQuery } from './media-query';

export const metrics = {
  fontSize: {
    xl: mediaQuery(34, 28),
    lg: mediaQuery(30, 24),
    ml: mediaQuery(26, 20),
    normal: mediaQuery(20, 17),
    regular: mediaQuery(18, 15),
    sl: mediaQuery(16, 13),
    small: mediaQuery(14, 11),
    extraSmall: mediaQuery(12, 8),
  },
  padding: {
    xl: mediaQuery(48),
    lg: mediaQuery(36),
    ml: mediaQuery(32),
    normal: mediaQuery(28),
    regular: mediaQuery(24),
    sl: mediaQuery(20),
    small: mediaQuery(12),
    extraSmall: mediaQuery(8),
  },
  margin: {
    xl: mediaQuery(48),
    lg: mediaQuery(36),
    ml: mediaQuery(32),
    normal: mediaQuery(28),
    regular: mediaQuery(24),
    sl: mediaQuery(20),
    small: mediaQuery(12),
    extraSmall: mediaQuery(8),
  },
};
