import React from 'react';

// export default function Post() {
//    const params = useParams();
//    const { search } = useLocation();
//    const queryParams = useMemo(() => new URLSearchParams(search), [search]);

//    console.log(queryParams.get('meuQueryParams'));

//    return <h1>Post page {params.id}</h1>;
// }

export default class Post extends React.Component {
   constructor(props) {
      super(props);

      const { search } = this.props.location;
      this.queryParams = new URLSearchParams(search);
   }

   handleNavigate = () => {
      this.props.history.push('/posts');
   };

   render() {
      console.log(this.queryParams.get('meuQueryParams'));
      return (
         <>
            <button onClick={this.handleNavigate}>
               Voltar para a lista de posts
            </button>
            <h1>Post page</h1>
         </>
      );
   }
}
