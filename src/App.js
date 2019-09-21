import React from "react";
import { connect } from "react-redux";
import {
  addToDo,
  editToDo,
  deleteToDo,
  showBtnEditToDo,
  hideBtnEditToDo
} from "./actions/index";
const App = ({ todo, dispatch }) => (
  <div className="container">
    <div class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <div class="card">
                    <div class="header">
                        <div class="avatar">
                            <img src="https://scontent.fbkk4-1.fna.fbcdn.net/v/t1.0-9/69146273_2277625399018705_2713402793917415424_n.jpg?_nc_cat=107&_nc_eui2=AeG0mhGHNGApaoDqeoi3kF2npAWwJisLdr-2wjkUT42ls6d0--uAwLn_bTwhGwVFqEC16Lp5xuSD1NUGPhY5KdV6vMMlTkkV0vGjmg4Q1FKU5g&_nc_oc=AQkKP5b_k7GIRegkpb1CX9nNYiS5otdOh56Xr_85qoAgFPgLZ9C46ijazTGpKXex2lc&_nc_ht=scontent.fbkk4-1.fna&oh=843f99ac3a84bb35ce7c90bb348be1d3&oe=5DFE9B72" alt=""/>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="user-meta has-text-centered">
                            <h3 class="username">SomChun</h3>
                            <h5 class="position">Warayut Taekrathok</h5>
                        </div>
                        <div class="user-bio has-text-centered">
                            <p>Data Engineer, FullStack Deverloper</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <div className="container is-fluid">
      <div className="notification" style={{ marginTop: "10px" }}>
        <input
          onKeyDown={e =>
            e.key === "Enter" &&
            dispatch(addToDo(e.currentTarget.value)) && [
              (e.currentTarget.value = "")
            ]
          }
          className="input is-hovered is-rounded"
          type="text"
          placeholder="input data"
        />
      </div>
    </div>
    {todo.map(todos => (
      <div key={todos.id} className="container is-fluid">
        <div className="notification" style={{ marginTop: "10px" }}>
          <div className="columns">
            <div className="column is-two-fifths">
              <abbr style={{ marginRight: "10px" }}>
                <button
                  className="button is-success is-small is-rounded is-focused"
                  style={{ marginRight: "10px" }}
                >
                  {todos.id}
                </button>
                {todos.text}
              </abbr>
            </div>
            <div className="column ">
              {todos.show && (
                <div class="field is-grouped">
                  <p class="control is-expanded">
                    <input
                      onKeyDown={e =>
                        e.key === "Enter" &&
                        dispatch(editToDo(todos.id, e.currentTarget.value)) && [
                          (e.currentTarget.value = "")
                        ]
                      }
                      className="input is-small is-loading"
                      type="text"
                      placeholder="input value"
                      style={{ marginRight: "10px" }}
                    />
                  </p>
                  <p class="control">
                    <button
                      onClick={() => dispatch(hideBtnEditToDo(todos.id))}
                      className="button is-info is-small is-focused"
                    >
                      CANCEL
                    </button>
                  </p>
                  <p class="control">
                    <button
                      onClick={() => dispatch(deleteToDo(todos.id))}
                      className="button is-danger is-small is-focused"
                    >
                      DELETE
                    </button>
                  </p>
                </div>
              )}
              {!todos.show && (
                <>
                  <button
                    onClick={() => dispatch(showBtnEditToDo(todos.id))}
                    className="button is-link is-small is-focused"
                    style={{ marginRight: "10px" }}
                  >
                    EDIT
                  </button>
                  <button
                    onClick={() => dispatch(deleteToDo(todos.id))}
                    className="button is-danger is-small is-focused"
                  >
                    DELETE
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  todo: state.todo || false
});

const AppWithConnect = connect(mapStateToProps)(App);
export default AppWithConnect;
