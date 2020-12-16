import { useEffect } from "react";
import { getData } from "./api";
import store from "./store";

export const usePosts = () => {
  const [state, setState] = store.useStore();

  useEffect(() => {
    (async () => {
      try {
        const [response] = await getData();
        setState((old) => ({
          ...old,
          posts: response
        }));
      } catch (e) {
        console.log(e);
      }
    })();
  }, [setState]);

  return state.posts;
};
