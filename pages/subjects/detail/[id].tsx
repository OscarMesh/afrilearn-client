import axios from "axios";
import { Subject } from "../../../types";
import NoResults from "../../../components/NoResults";
import TopicCard from "../../../components/TopicCard";

type Props = {
  subject: Subject;
};

export default function SubjectPage({ subject }: Props) {
  return (
    <div className="mt-6 lg:p-0 md:p-5 p-3">
      <h1 className="text-center font-bold text-[#29465b] text-[20px]">
        {subject.name}
      </h1>
      <h2 className="font-bold text-[#29465b] text-[20px]">Topics</h2>
      <div className="flex flex-col gap-10 mt-4 h-full">
        {subject.topics.length ? (
          subject.topics.map((topic) => (
            <TopicCard key={topic._id} topic={topic} />
          ))
        ) : (
          <NoResults text="No topic" />
        )}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await axios.get("http://localhost:5000/api/v1/subjects");
  const subjects = data.subjects;

  const paths = subjects.map((subject: any) => ({
    params: { id: subject._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }: any) {
  const { data } = await axios.get(
    `http://localhost:5000/api/v1/subjects/${id}`
  );
  const subject = data.subject;

  return { props: { subject } };
}
