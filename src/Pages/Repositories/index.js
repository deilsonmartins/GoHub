import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import api from '../../services/api';

import { Owner, IssueList } from './styles';

import Container from '../../Components/Container/index.js';

export default class Repository extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                repository: PropTypes.string,
            }),
        }).isRequired,
    };

    state = {
        repository_owner: {},
        repository_data: {},
        issues : []
    };

    async componentDidMount() {
        const { match } = this.props;

        const repoName = decodeURIComponent(match.params.repository);

        const [repository, issues ] = await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues`, {
                params: {
                    state: 'open',
                    per_page: 5,
                }
            })
        
        ])

        this.setState({
            repository_owner: repository.data.owner,
            repository_data: repository.data,
            issues: issues.data
            
        });
    }

    render() {
        const { repository_owner, repository_data, issues } = this.state;
        
        return (
            <>
            <Container>
                <Owner>
                    <Link to="/">Retornar</Link>
                    <img src={repository_owner.avatar_url} alt={repository_owner.login}/>
                    <h1>{repository_data.name}</h1>
                    <p>{repository_data.description}</p>
                </Owner>
            </Container>

            <IssueList>
                {issues.map(issue => (
                    <li key={issue.id}>
                        <img src={issue.user.avatar_url} alt={issue.user.login}/>
                        <div>
                            <strong>
                                <a href={issue.html_url}>{issue.title}</a>
                                {issue.labels.map(label => 
                                    <span key={String(label.id)}>
                                        {label.name}

                                    </span>
                                    )}
                            </strong>
                            <p>{issue.user.login}</p>
                        </div>
                        
                    </li>
                   
                ))}


            </IssueList>
            </>
           

           
        );
    }
}
