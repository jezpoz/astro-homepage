import { init, track, parameters } from 'insights-js';

init(import.meta.env.SECRET_INSIGHTS_ID);

export {
  track,
  parameters,
};