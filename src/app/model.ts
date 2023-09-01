
export interface Postt {
  id: number,
  methode: string,
  date:Date,
  address:string
}

export interface Similarity {
  timestamp: string,
  time: string,
  lang: string,
  langConfidence: string,
  similarity: string
}
export interface Sentimental {
  timestamp: string,
  time: string,
  lang: string,
  langConfidence: string,
  text: string,
  sentiment: Sentiment,

}
export interface Sentiment {
  score: string,
  type: string


}
export interface Language {
  timestamp: string,
  time: string,
  detectedLangs: SingleLanguage[]

}

export interface SingleLanguage {
  lang: string,
  confidence: string

}

export interface EntityExtraction {
  lang: string,
  annotations: Annotations[],

}
export interface Annotations {
  title: string,
  start: string,

}


