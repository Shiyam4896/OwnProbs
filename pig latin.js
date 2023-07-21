
function toPigLatin(word) {    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let firstVowelIndex = -1; 
    
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        firstVowelIndex = i;
        break;
      }
    }
  
    if (firstVowelIndex === 0) {
      return word + 'way';
    }
    else if (firstVowelIndex > 0) {
      const consonantCluster = word.slice(0, firstVowelIndex);
      const restOfWord = word.slice(firstVowelIndex);
      return restOfWord + consonantCluster + 'ay';
    }
    else {
      return word;
    }
  }
  
  function sentenceToPigLatin(sentence) {
    const words = sentence.split(' ');  
    const pigLatinWords = words.map(word => toPigLatin(word));  
    return pigLatinWords.join(' ');
  }
  
  const sentence = "Hello, how are you doing today?";
  const pigLatinSentence = sentenceToPigLatin(sentence);
  console.log(pigLatinSentence); 
  
