export interface Gratitude {
  id: number;
  title: string;
  details: string;
  date: string;
  tags: string[];
}

export let gratitudesList: Gratitude[] = []