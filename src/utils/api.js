import axios from "axios";

let data = null;

export const getData = async search => {
  if (!search) {
    return [];
  }

  if (!data) {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/Right-Side-Up-Engineering/coding-challenge/master/sample.json"
      );

      data = response.data.sort((a, b) => {
        return a.score > b.score ? -1 : a.score < b.score ? 1 : 0;
      });
    } catch (error) {
      data = [];
      console.error(error);
    }
  }

  return data.filter(r =>
    (r.first_name.toLowerCase() + " " + r.last_name.toLowerCase()).includes(
      search.trim().toLowerCase()
    )
  );
};
