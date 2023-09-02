#Text Analytics Tool

 Web application that enables text analysis using the various tools provided by the Dandelion API.
 The application provides the following functionalities:

 Token Configuration: The user registers on the Dandelion API and receives a token. The token is stored at the browser level to enable API requests to be sent without having to enter the token each time the application is opened.

 Entity Extraction: The user can enter text into the application. The application uses the Dandelion API to find entities in text. The user can set a confidence threshold (min_confidence) and choose whether to include information such as images, abstractions, and categories for each entity. After the API response, the application displays the entities and additional information (images, abstractions, categories) for each entity that is tagged.

 Text Similarity: The user can enter two texts. The application uses the Dandelion API to determine the semantic similarity between the two texts and displays the result.

Language Detection: The user enters the text for which he wants to determine the language in which it is written. The app uses the Dandelion API for language detection. Also, the user can select the optional parameter "clean" which indicates that the text should be cleaned of links, email addresses and hash tags before language detection.

Sentiment Analysis: The user can enter the text for which he wants sentiment analysis to be performed. The analysis language can be selected (English, Italian or automatic language detection). The app then uses the Dandelion API to calculate the sentiment of the text and displays the result as a number between -1 and 1, along with the sentiment type (positive, neutral, or negative).

API Call History: The application keeps a record of every API call to the Dandelion API, including the URL, date and time of the call. The user can review this history.
