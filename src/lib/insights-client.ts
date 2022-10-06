import { init, track, parameters } from 'insights-js';

init(import.meta.env.SECRET_SANITY_PROJECTID);

export {
  track,
  parameters,
};