export type TopDoctorsProps = {
  doctors: {
    id: string;
    name: string;
    avatarImageUrl: string | null;
    specialty: string;
    appointments: number;
  }[];
};
