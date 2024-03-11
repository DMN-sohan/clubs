import Sheets from "sheets/sheets";
import { CSVtoJSON_clubs } from "./CSVtoJSON";
import { CSVtoJSON_links } from "./CSVtoJSON";
import { CSVtoJSON_subdomain } from "./CSVtoJSON";
import { CSVtoJSON_master } from "./CSVtoJSON";
import { setSessionStorage } from "./SessionStorage";
import axios from "axios";

export async function setDetails(setLoading) {
  try {
    const [master, subdomains, links] = await Promise.all([
      axios.get(Sheets.MASTER),
      axios.get(Sheets.SUBDOMAINS),
      axios.get(Sheets.LINKS)
    ]);

    const master_json = CSVtoJSON_master(master.data);
    setSessionStorage("master", master_json);

    const subdomains_json = CSVtoJSON_subdomain(subdomains.data);

    setSessionStorage("subdomains", subdomains_json);

    const links_json = CSVtoJSON_links(links.data);
    setSessionStorage("links", links_json);

    const clubPromises = Object.keys(links_json).map(key =>
      axios.get(links_json[key]).then(club => {
        const clubs_json = CSVtoJSON_clubs(club.data,key);
        setSessionStorage(key, clubs_json);
      })
    );

    await Promise.all(clubPromises).then(()=>{
      console.log("Done");
    });
    sessionStorage.setItem("render", "true");
    setLoading(true);


  } catch (error) {
    console.error("Error fetching data:", error);
    setLoading(false);
  }
}
