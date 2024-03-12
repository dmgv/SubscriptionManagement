# The MVC Patter

[<< VOLTAR](README.md)

Using the MVC pattern to implement the "Subscriptions" and "Invoices" functionalities in a straightforward manner, not only will the files comprising the MVC itself be created, but also those that will handle the routes. The model will be implemented using a JSON file to persist the data.

## The data model

### The Class diagram of the features

```mermaid
classDiagram
    class User {
        +int id
        +string email
        +string password
        +int status
        +bool isAdmin
        +Date created
        +Date modified
    }
    class Plan {
        +int id
        +string name
        +float amount
        +int frequency
        +Date created
        +Date modified
    }
    class BillingInfo {
        +string id
        +string card_number
        +string csc
        +string expiration
        +string name
        +string surname
        +string email
        +string phonenumber
        +string address
        +string city
        +string state
        +string zip_code
        +string country
        +int profile_id
        +Date created
        +Date modified
    }
    class ConfigurationSet {
        +int id
        +bool receive_weekly_reminder
        +int user_id
        +Date created
        +Date modified
    }
    class Invoice {
        +int id
        +string nf_code
        +string buyer
        +string address
        +string card_number
        +Date duedate
        +string description
        +Date cycle_start
        +Date cycle_end
        +float amount
        +float paid_amount
        +Date payment_date
        +Date liquidation_date
        +int payment_status
        +int subscription_id
        +Date created
        +Date modified
    }
    class Subscription {
        +int id
        +int plan_id
        +Date duedate
        +Date cancellation_date
        +int user_id
        +Date created
        +Date modified
    }
    class Profile {
        +int id
        +string name
        +string surname
        +string gender
        +int marital_status
        +int number_of_dependents
        +Date birth_date
        +string lives_in
        +string occupation
        +string picture
        +int user_id
        +Date created
        +Date modified
    }

    User "1" --> "0..1" BillingInfo : has
    User "1" --> "0..1" ConfigurationSet : has
    User "1" --> "*" Invoice : has
    User "1" --> "*" Subscription : has
    Subscription "1" --> "1" Plan : has
    Subscription "*" --> "*" Invoice : has
    User "1" --> "0..1" Profile : has
```

## Entendeo o que será feito

```mermaid
sequenceDiagram
    participant Router as app-router.js
    participant Controller as app-controller.js
    participant Model as model-invoices.js
    participant Express as Express

    Router->>Controller: Requisição HTTP
    activate Controller
    Controller->>Model: Invoice.fetchAll()
    activate Model
    Model-->>Controller: Dados das faturas
    deactivate Model
    Controller-->>Express: res.render('app/preferences-billing')
    deactivate Controller
    Express-->>Router: Página renderizada

```

[<< VOLTAR](README.md)
