import Layout from '../common/layout/Main'
const Page = () => {
  return (
    <>
      <h1>This is news page</h1>
    </>
  );
};
Page.getLayout = function getLayout(page) {
  return (
    <Layout title={'اخبار'} >
      {page}
    </Layout >
  )
}
export default Page;
