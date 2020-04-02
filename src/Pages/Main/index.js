import React, {Component} from 'react';

import api from '../../services/api';

import { Link } from 'react-router-dom';

import {Owner, ContainerRepo, Form, SubmitButton} from './styles';

import Container from '../../Components/Container/index.js';

import {FaGithubAlt, FaPlus} from "react-icons/fa";

import {toast} from 'react-toastify';

import {FiTrash2} from 'react-icons/fi';

export default class Main extends Component {

    state = {
        newRepo: '',
        repositories: []
    }

    componentDidMount(){

        const repositories = localStorage.getItem('save_repositories');

        if(repositories) {
            this.setState({
                repositories: JSON.parse(repositories)
            })
        }

    };


    componentDidUpdate(_, prevState) {
        const {repositories} = this.state;

        if(prevState.repositories !== repositories) {
            localStorage.setItem('save_repositories', JSON.stringify(repositories))
        }

        
    };

    handleSubmit = async e => {
        e.preventDefault();

        try {
            const {newRepo, repositories} = this.state;
            const response = await api.get(`/repos/${newRepo}`);

            
            const data = {
                name: response.data.full_name,
                avatar_id: response.data.owner.avatar_url
            }

            this.setState({
                repositories: [...repositories, data],
                newRepo: '',
                })

        }  catch (err) {
            toast.error('Falha na busca, verique o nome do repositório.')
        }

    };

   
    handleInputChange = e => {

        this.setState({newRepo: e.target.value})
    };

    handleDelete(nameRepository) {
        
        try {
            const {repositories} = this.state;
        
            const newRepositories = repositories.filter(repositorie=> repositorie.name !== nameRepository);
        
            this.setState({repositories: newRepositories});
    
        } catch (err) {
            toast.error('Falha de deletar, tente novamente.')
        }
      
       
    }
    render() {

        const {newRepo, repositories} = this.state;

        return (
            <div>
                
            <Container>
                <h1>
                    <FaGithubAlt/>
                    Repositories
                </h1>
                <Form onSubmit={this.handleSubmit}>
                    <input
                        type= "text"
                        placeholder = "Add Repository"
                        value={newRepo}
                        onChange = {this.handleInputChange}

                    />
                    <SubmitButton>
                        <FaPlus/>
                    </SubmitButton>
                </Form>
            </Container>,
               
            <ContainerRepo>
                {repositories.map(repository => (
                    <Owner>
                        <Link 
                            to={`/repository/${encodeURIComponent(repository.name)}`}>
                                <img src={repository.avatar_id} alt={repository.name}/>

                        </Link>
                        
                        <href key={repository.name}><h2>{repository.name}</h2></href>
                        <button type="button" onClick={() => this.handleDelete(repository.name)}><FiTrash2 size={16} color="black"/></button>

                    </Owner>
                ))}
            </ContainerRepo>
            </div>
            
            
        )
    }

};
