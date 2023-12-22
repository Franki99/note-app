import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { genres } from './../services/fakeGenreService';

class NoteForm extends Form {
    state = { 
        data: {
            title: "",
            notes: "",
        },
        errors: {}
     };

     schema = {
        title: Joi.string().required().label("Tittle"),
        notes: Joi.string().required().label("Username"),
        _id: Joi.string()
      };

      componentDidMount(){
        const movieId = this.props.match.params.id;
        if (movieId === "new") return;

        const movie = getMovie(movieId)
        if (!movie) return this.props.history.replace("/not-found");

        this.setState({ data: this.mapToViewModel(movie) });
      }

      mapToViewModel(movie) {
        return{
            _id: movie._id,
            title: movie.title,
            notes: movie.notes
        };
      }

      doSubmit = () => {
        saveMovie(this.state.data);

        this.props.history.push("/notes");
      }


    render() { 
        return (
            <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("notes", "Notes")}
          {this.renderButton("save")}
        </form>
      </div>
        );
    }
}
 
export default NoteForm;