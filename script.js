function showhide() {
  var div = document.getElementById("username");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

$("#quiz").quiz({
  resultsScreen: "#results-screen",
  counter: true,
  homeButton: "#custom-home",
counterFormat: "Question %current of %total",
  questions: [
    {
      q:
        "1. It is ironic and somehow tragic that good people are often dull while evil people can be endlessly _______.",
      options: [
        "ordinary",
        "stubborn",
        "skeptical",
        "fascinating",
        "unobtrusive"
      ],
      correctIndex: 3,
      correctResponse: "Good job!",
      incorrectResponse:
        'The word "ironic" signifies a contradiction of ideas within the sentence, and the conjunction "while:" indicates that the characteristics of the good people and the evil people are being contrasted. Therefore, if the good people are often "dull", the evil people must be having a characteristic which is the opposite of being "dull". Among the given choices, it is only the word "fascinating" that is opposite in meaning to the world "dull". So, D is the answer.'
    },
    {
      q:
        "2. Because most of them lack recreational facilities, high rise apartments have been criticized in recent years as _______ for families with children.",
      options: [
        "unsuitable",
        "degrading",
        "important",
        "inevitable",
        "appropriate"
      ],
      correctIndex: 0,
      correctResponse: "Correct!",
      incorrectResponse:
        'The use of conjunction because in the beginning of the sentence shows that there is no contradiction within the sentence but, on the contrary, the second part of the sentence follows logically from the first part. If high rise buildings are "important", "inevitable" or "appropriate" for families with children, they cannot be "criticized" for that reason. So, (C), (D) and (E) can be rejected straightway, and the choice is only between (A) and (B). The lack of recreational facilities in most high-rise buildings cannot lead to a conclusion that all high-rise buildings are "degrading" for families with children. The logical statement can be that such buildings are "unsuitable" for families with children. So, (A) is the best choice.'
    },
    {
      q:
        "3. Rachel Carson's Silent Spring, which graphically exposed the _______ of the indiscriminate use of pesticides, is widely credited with having _______ the modern environmental movement.",
      options: [
        "advantages.. inaugurated",
        "hazards.. defused",
        "benefits.. launched",
        "deaths.. contained",
        "dangers.. inspired"
      ],
      correctIndex: 4,
      correctResponse: "Fantastically Well Done!",
      incorrectResponse:
        "The word “exposed”, and the phrase “indiscriminate use of pesticides”, imply that the first missing word must be one which stands for something bad that is associated with the use of pesticides. So, the choices “advantages” and “benefits” can be ruled out first. Since the phrase “deaths of th indiscriminate use of pesticides” does not make sense, the choice “deaths” can also be ruled out, leaving “hazards” (meaning “risks”) and dangers as the only possible choices for the first missing word. If the pair “hazards.. defused” is chosen, the sentence would mean that the exposure of the hazards of using pesticides defused (or weakened) the modern environmental movement, which is illogical. The pair “dangers.. inspired” completes a cogent and logical sentence."
    },
    {
      q:
        "4. Having turned out forty solo recordings, this hardworking harpsichordist can almost be classed as _______.",
      options: [
        "a contradiction",
        "a sluggard",
        "an apprentice",
        "an event",
        "an industry"
      ],
      correctIndex: 4,
      correctResponse: "Awesome!",
      incorrectResponse:
        "The harpsichordist (a musician who plays the instrument harpsichord) referred to in the sentence is described as hardworking , and is stated to have turned out as many as forty solo recordings. He can therefore not be classed as a contradiction, or a sluggard (meaning a lazy person) or an apprentice. Classifying him as an event is not as appropriate as classifying him as an industry by himself. So, (E) is the answer."
    },
    {
      q:
        "5. It is impossible for a serious scholar to condone this _______ dismissal of respected theories.",
      options: ["astute", "cavalier", "sagacious", "necessary", "commendable"],
      correctIndex: 1,
      correctResponse: "You Rock!",
      incorrectResponse:
        "If the theories are respected ones, their dismissal by someone cannot be described as astute (meaning very intelligent), or sagacious (meaning wise), or necessary, or commendable (meaning praiseworthy). It can only be described as cavalier (meaning arrogant or rash). So, (B) is the answer."
    },
    {
      q:
        "6. Harrying the foe with artillery fire and _______ them with fire ships, the English forced the Spanish to _______ their invasion attempt.",
      options: [
        "dispersing .. abandon",
        "ramming .. confirm",
        "restricting .. rebuff",
        "helping .. reconsider",
        "reinforcing .. ignore"
      ],
      correctIndex: 0,
      correctResponse: "Rising Star!",
      incorrectResponse:
        "The sentence obviously describes a war between the British and the Spanish, which was started by an attempt of the Spanish to invade Britain. If, in that attempt, the Spanish were harried (meaning harassed) by the British with artillery fire, what would be Spanish have been forced to do with their invasion attempt ? 'Abandon' is the best among the given choices for the second missing word. Its pair-word 'dispersing' is also equally appropriate for the first missing blank. So, (A) is the answer."
    },
    {
      q:
        "7. Fortunately, Ms. Mason has the unusual ability to transform a tedious legal contention into an _______ account.",
      options: ["arid", "erratic", "improbable", "absorbing", "interminable"],
      correctIndex: 3,
      correctResponse: "Flawless victory!",
      incorrectResponse:
        "The use of the word 'fortunately' shows that the unusual ability of Ms. Mason is a desirable one. So, the result of the transformation of the tedious legal contention must have been something more desirable. Among the choices, it is only the word 'absorbing' that represents a desirable quality. So, (D) is the answer."
    },
    {
      q:
        "8. The descriptions in these essays range widely, from the fanciful to the matter-of-fact, from the _______ to the fatuous, from the objective to the _______.",
      options: [
        "witty.. realistic",
        "meager.. descriptive",
        "insightful.. impressionistic",
        "inane. commonplace",
        "articulate.. empirical"
      ],
      correctIndex: 2,
      correctResponse: "Escape velocity reached!",
      incorrectResponse:
        "One example of the wide range of description in the essays referred to in the given sentence is mentioned as 'from the fanciful to the matter-of-fact'. Since these are exact opposites, the other two phrases should also represent exact opposites. So, the first missing must be the opposite of the word 'fatuous' (meaning 'silly'), and the second missing word must be the opposite of the word 'objective' (meaning 'unemotional'). Among the given choices, it is the pair 'insightful/ and 'impressionistic' which are the opposites of 'fatuous' and 'subjective' respectively. So, (C) is the answer."
    },
    {
      q:
        "9. Students who interpret the honor strictly find it _______ that some bright students complete take-home examinations for less proficient friends.",
      options: [
        "remedial",
        "irreproachable",
        "unconscionable",
        "irrelevant",
        "magnanimous"
      ],
      correctIndex: 2,
      correctResponse: "The crowd goes wild!",
      incorrectResponse:
        "The sentence seeks to contrast the attitudes of two sets of students-those who interpret the honor code strictly, and those who answer the take-home examinations on behalf of other, less intelligent students. Obviously, those students who interpret the honor code strictly would held that no student should attempt to answer the take home examination for another student. They would, therefore, not consider the practice a brighter student answering the home examination of a less bright student as 'remedial', or 'irreproachable', or 'irrelevant', or 'magnanimous'. They would certainly consider this practice as 'unconscionable (meaning 'against one's conscience'). So, (C) is the answer."
    },
    {
      q:
        "10. The discovery that interstellar _______ exist _______ the scientific hypothesis that the expanses between the stars are devoid of matter.",
      options: [
        "galaxies..revived",
        "constellations..prompted",
        "molecules..demolished",
        "vastness..challenged",
        "vacuums..altered"
      ],
      correctIndex: 2,
      correctResponse: "Spool up the FTL drive!",
      incorrectResponse:
        "The word 'interstellar' means 'the space between stars'.) The sentence speaks of 'the scientific hypothesis that the expanses between the strs are devoid of matter'. A hypothesis can be either confirmed or falsified by any new discovery. So, among the choices for the second missing word, 'demolished' is the only word, which has one of these meanings. The theory that the expanses between the stars are devoid of matter would certainly have been demolished, if it had been discovered that there are molecules in interstellar space. Thus, the word ;'molecules;' also fits in well to give a cogent meaning to the sentence. So, (C) is the answer"
    },
    {
      q:
        "11. Although the colonist resented the new British laws, they _______ them as long as England did not _______ them too strenuously.",
      options: [
        "rejected.. define",
        "amended.. follow",
        "tolerated.. enforce",
        "defied.. interpret",
        "welcomed.. observe"
      ],
      correctIndex: 2,
      correctResponse: "Shiver me timbers!",
      incorrectResponse:
        "The use of the conjunction 'although' indicates that there is a contradiction in ideas between the first and the second parts in the sentence. If the colonists resented (meaning hated) the new British laws, they must normally be expected to have protested against it But, because of the use of the conjunction 'although' in the sentence, we must understand that their action was the opposite of 'protested', The only choices for the first missing word which are the opposite of 'protested' are 'tolerated' and 'welcomed'. The pair word of 'welcomed' is 'observe', and this is not appropriate for the second blank because it was not British, but the colonists, who were expected to observe the new laws, while the role of the British, as the superior power, was to enforce the new laws. If the British did not enforce the new laws too strenuously, the colonists would not have minded tolerating them. So, it is (C), the answer."
    },
    {
      q:
        "12. As the best-informed and most dispassionate of the panel members, Dr. Camila Torrez was the most _______ of those offering views on fission technology.",
      options: [
        "unsuspecting",
        "preposterous",
        "persuasive",
        "confusing",
        "temperamental"
      ],
      correctIndex: 2,
      correctResponse: "That's the way it's done!",
      incorrectResponse:
        "The use of conjunction 'as', (meaning ;'because;), shows that the second part of the sentence must logically follow from the first part. The missing word must therefor describe a person who is 'best-informed' and 'most dispassionate'. Among the choices, it is only the word 'persuasive' that can describe such a person. So, the answer is (C)."
    },
    {
      q:
        "13. He was _______ in his vindictiveness, often feigning a disarming camaraderie while _______ his opportunity for revenge.",
      options: [
        "impulsive.. gauging",
        "harmless.. preparing",
        "resolute.. forgetting",
        "brazen.. dreading",
        "devious.. awaiting"
      ],
      correctIndex: 4,
      correctResponse: "Face-melting guitar solo!",
      incorrectResponse:
        "The person described is said to be 'often feigning a disarming camaraderie', meaning that his friendship was not genuine, but was a pretended one. the use of the word 'revenge' indicates that the person to whom he was pretending friendship was one who had harmed him earlier. So, the sentence must mean that the person described in the sentence was intent upon taking revenge for this earlier harm. He must therefore be looking for an opportunity to take revenge, even while pretending friendship. So, among the choices for the second missing word, only 'preparing' and 'awaiting' are appropriate. Such a clever person will obviously not be 'harmless' in his vindictiveness. So, (B) is not a suitable choice for the first missing word. 'Devious', meaning 'cunning' is what describes such a person perfectly, and fits in well in the first blank. So, (E) is the answer."
    },
    {
      q:
        "14. Those who seek the advice of scientists in this matter should recognize that, because the knowledge available is _______. The reliability of the advice cannot be _______.",
      options: [
        "technical..decumented",
        "coherent..explained",
        "explicit..understood",
        "inadequate..guaranteed",
        "extraneous.. denied"
      ],
      correctIndex: 3,
      correctResponse: "You've got this!",
      incorrectResponse:
        "The words 'documented', explained' and 'understood' are not suitable adjectives for the noun 'reliability', and can straight-away be discarded for that reason. Since it is logical to say that, if the available knowledge is inadequate, the reliability of the advice based on such limited knowledge cannot be guaranteed, (D) is a suitable choice. The pair of words in (E) do not result in a logical sentence, and is wrong."
    },
    {
      q:
        "15. The _______ of modernist architecture _______ the natural human desire to celebrate the decorate, to take delight in ornament.",
      options: [
        "elaborateness.. neglects",
        "austerity.. recognize",
        "embellishment.. undermines",
        "severity.. opposes",
        "uniformity.. reflects"
      ],
      correctIndex: 3,
      correctResponse: "You Rock!",
      incorrectResponse:
        "The information that the second part of the sentence imparts is that there exists a natural human desire to celebrate and decorate, and to take delight in ornament. If modern architecture is 'elaborate', it would be fulfilling, and not neglecting, this desire. So, (A) is wrong. If mode architecture is 'austere', it would be neglecting this natural desire, and not recognizing it. So, (B) is wrong. If modern architecture 'embellishes'. It would again be fulfilling this natural desire, and not be undermining it. So, (C) is also wrong. If modern architecture is 'severe' (meaning 'austere'), it would b e opposing this natural desire. So, (D) leads to a logical sentence, and is the answer. Since there can be no uniformity about decoration or ornamentation, (E) does not result in a logical sentence."
    }
  ]
});
