// URL du webhook Discord
const webhookURL = "https://discord.com/api/webhooks/1298426649112739934/_NVGcbokbKWtMPm3cAKbha27o8sgWcE1oP6BiL09leXnxcW6nsYhZxexmxkxm74qAclu";

// Informations à envoyer au webhook
const data = {
  content: "Quelqu'un a visité le site !",
};

// Envoyer la requête POST au webhook Discord
fetch(webhookURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
.then(response => {
  if (!response.ok) {
    throw new Error('Erreur avec le webhook Discord');
  }
  return response.json();
})
.then(json => console.log(json))
.catch(error => console.error('Erreur:', error));
