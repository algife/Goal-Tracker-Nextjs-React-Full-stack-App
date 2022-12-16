import appConfig from "../../../app.config";
import GoBackLink from "../../../components/go-back-link";
import Layout from "../../../components/layout";
import { Goal } from "../../../models";
// import styles from "../../../styles/GoalDetails.module.scss";

// --------------------

interface Props {
  goal: Goal;
}

export default function GoalDetails({ goal }: Props) {
  const fieldsLayout = (
    <>
      {Object.entries(goal).map(([key, value]) => {
        <div className="container">
          <label htmlFor={key}>{key}</label>
          <input readOnly id={key} name={key} value={value} />
        </div>;
      })}
    </>
  );
  return (
    <Layout title={`Goal Details: ${goal.title}`}>
      {fieldsLayout}
      <GoBackLink />
    </Layout>
  );
}

// ! Prepared below two strategies to fetch data different than the one from /goals route (Option 1)

// Option 2 fetching under request (getServerSideProps)
// Fetches data at request/load time
export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.params as { id: string };
  const res = await fetch(`${appConfig.API_URL}/goals/${id}`);
  const goal = await res.json();
  return { props: { goal } as Props };
};

// Option 3 (getStaticProps + getStaticPaths)
// Fetch all items from a list at once although they are displayed dynamically o a per-id basis they will be ready at build time
// export const getStaticProps = async (ctx: any) => {
//   const { id } = ctx.params as { id: string };
//   const res = await fetch(`${appConfig.API_URL}/goals/${id}`);
//   const goal = await res.json();
//   return { props: { goal: goal } as Props };
// };

// export const getStaticPaths = async (ctx: any) => {
//   const res = await fetch(`${appConfig.API_URL}/goals`);
//   const goals: Goal[] = await res.json();

//   const paths = goals.map((goal) => ({
//     params: { id: `${goal.id}` },
//   }));

//   return { paths };
// };
