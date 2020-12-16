import axios from "axios";

export const getData = async () => {
  const resp = await axios.get("https://mockend.com/MakersAll8/mockend/posts");
  if (resp.status === 200) {
    return [resp.data, null];
  }
  return [null, new Error("api error")];
};
