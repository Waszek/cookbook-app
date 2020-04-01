import React from 'react';


function Item({id, image, card_title, card_text, modal_title, modal_text_ingredients, modal_text, modal_preparation_time, modal_serving, modal_difficulty}){

  
    const ingredients = modal_text_ingredients.map(ingredient =>(
    <li key={ingredient.key}>{ingredient.value}</li>
    ))
    return(
        <div className="modal-card">
        <div className="card">
            <img src={require(`../dishes-images/${image}`)} className="card-img-top" alt="image1"/>
            <div className="card-body">
                <h5 className="card-title">{card_title}</h5>
                <p className="card-text">{card_text}</p>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target={`#${id}`}>Zobacz przepis</button>
           </div>
        </div>
        
        <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="ModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{modal_title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <img src={require(`../dishes-images/${image}`)} alt="dish"/>
              <h3>Składniki</h3>
              <ul>
                {ingredients}
              </ul>
              <h3>Przygotowanie</h3>
              <p>{modal_text}</p>
              <div className="modal-specification">
                <span><i className="far fa-clock"></i>{modal_preparation_time}</span>
                <span><i className="fas fa-utensils"></i>{modal_serving}</span>
                <span><i className="fas fa-balance-scale"></i>{modal_difficulty}</span>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Zamknij</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Item;