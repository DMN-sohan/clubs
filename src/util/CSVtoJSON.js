export function CSVtoJSON_master(csvData) {
  const lines = csvData.split("\n");
  const json = {};
  for (let line in lines) {
    var [name, link] = lines[line].split(",");
    json[name] = link.replace(/\r/g, "");
  }
  return json;
}

export function CSVtoJSON_links(csvData) {
  const lines = csvData.split("\n");
  const json = {};
  for (let line in lines) {
    var [name, link] = lines[line].split(",");
    json[name] = link.replace(/\r/g, "");
  }
  return json;
}

export function CSVtoJSON_subdomain(csvData) {
  const lines = csvData.split("\n");
  const json = {};
  for (let line in lines) {
    var [name, link, type] = lines[line].split(",");
    json[name] = { link: link, type: type.replace(/\r/g, "") };
  }
  return json;
}

export function CSVtoJSON_clubs(csvData, key) {
  const lines = csvData.split("\n");
  const json = {};

  if(key == "About Us"){
    json.count = parseInt(lines[0].split(",")[1]);
    json["members"] = [];

    for (let i = 0; i < json.count; i++) {
      json["members"].push({
        "name": "",
        "post": "",
        "roll number": "",
        "imageURL": "",
        "description" : "",
        "resumeURL" : ""
      });
    }

    let [, ...values] = lines[1].split(",");
    for (let i = 0; i < json.count; i++) {
      json.members[i].name = values[i];
    }

    [, ...values] = lines[2].split(",");
    for (let i = 0; i < json.count; i++) {
      json.members[i]["Roll Number"] = values[i];
    }

    [, ...values] = lines[3].split(",");
    for (let i = 0; i < json.count; i++) {
      json.members[i].resumeURL = values[i];
    }

    [, ...values] = lines[4].split(",");
    for (let i = 0; i < json.count; i++) {
      json.members[i].description = values[i];
    }

    [, ...values] = lines[5].split(",");
    for (let i = 0; i < json.count; i++) {
      json.members[i].post = values[i];
    }

    [, ...values] = lines[6].split(",");
    for (let i = 0; i < json.count; i++) {
      json.members[i].imageURL = values[i];
    }

    return json;
  }

  json["Head"] = {
    count: parseInt(lines[0].split(",")[1]),
    members: [],
  };

  json["Name"] = lines[0].split(",")[3];

  for (let i = 0; i < json["Head"].count; i++) {
    json["Head"].members.push({
      name: "",
      post: "",
      "roll number": "",
      "image url": "",
    });
  }

  let [, ...values] = lines[1].split(",");
  for (let i = 0; i < json["Head"].count; i++) {
    json["Head"].members[i].name = values[i];
  }
  [, ...values] = lines[2].split(",");
  for (let i = 0; i < json["Head"].count; i++) {
    json["Head"].members[i].post = values[i];
  }
  [, ...values] = lines[3].split(",");
  for (let i = 0; i < json["Head"].count; i++) {
    json["Head"].members[i]["roll number"] = values[i];
  }
  [, ...values] = lines[4].split(",");
  for (let i = 0; i < json["Head"].count; i++) {
    json["Head"].members[i]["image url"] = values[i];
  }

  json["Member"] = {
    count: parseInt(lines[5].split(",")[1]),
    members: [],
  };

  for (let i = 0; i < json["Member"].count; i++) {
    json["Member"].members.push({
      name: "",
      "roll number": "",
    });
  }

  [, ...values] = lines[6].split(",");
  for (let i = 0; i < json["Member"].count; i++) {
    json["Member"].members[i].name = values[i];
  }
  [, ...values] = lines[7].split(",");
  for (let i = 0; i < json["Member"].count; i++) {
    json["Member"].members[i]["roll number"] = values[i];
  }

  [, ...values] = lines[8].split(",");
  json["Gallery"] = values.filter((item) => item.trim() !== "");

  [, ...values] = lines[9].split(",");
  json["Videos"] = values.filter((item) => item.trim() !== "");

  json["Letter from Team"] = lines[10].substring(17).replace(/,+\s*$/, "");

  json["Events"] = {
    count: parseInt(lines[11].split(",")[1]),
    event: [],
  };

  for (let i = 0; i < json["Events"].count; i++) {
    json["Events"].event.push({
      "title": "",
      "description": "",
      "time" : "",
      "imageURL" : ""
    });
  }

  [, ...values] = lines[12].split(",");
  for (let i = 0; i < json["Events"].count; i++) {
    json["Events"].event[i].title = values[i];
  }

  [, ...values] = lines[13].split(",");
  for (let i = 0; i < json["Events"].count; i++) {
    json["Events"].event[i].description = values[i];
  }

  [, ...values] = lines[14].split(",");
  for (let i = 0; i < json["Events"].count; i++) {
    json["Events"].event[i].time = values[i];
  }

  [, ...values] = lines[15].split(",");
  for (let i = 0; i < json["Events"].count; i++) {
    json["Events"].event[i].imageURL = values[i];
  }

  return json;
}
