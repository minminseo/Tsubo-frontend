
export const symptomsSample = [
    "頭が痛いです",
    "お腹が痛いです",
    "筋肉痛です",
    "眠いです",
    "目が疲れています",
    "肩がこっています",
    "腰が痛いです",
    "胃が痛いです",
    "風邪気味です",
    "ストレスがたまっています",
    "便秘気味です",
    "口内炎があります",
    "ひざが痛いです",
    "二日酔いです",
    "手が冷えています",
    "足がむくんでいます",
    "耳鳴りがします",
    "生理痛があります",
    "鼻水が止まりません",
    "肌がかゆいです"
];

export const shuffleAndSelectSymptoms = (symptomsSample: string[], count: number): string[] => {
    const shuffled = [...symptomsSample].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
