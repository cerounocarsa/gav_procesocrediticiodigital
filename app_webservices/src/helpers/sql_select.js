const {Pool, Client, initPGSQL} = require('../conf/database');
const {clientMSSQL, initMSSQL01} = require('../conf/database');

const {errorBody}   = require('../utils/_json');


/**
    * @param {integer} actionType - Tipo de accion
    * @param {integer} codigo - codigo
    * @param {Strinig} valor- valor
    * @returns {Array} returns
*/
const selectDOMINIOTIPO = async(actionType, codigo, valor) => {
    let _code   = 200;
    let _data   = [];
    let query00 = '';

    switch (actionType) {
        case 1:
            query00 = `SELECT
                            *
                        FROM
                            adm.DOMINIOTIPO`;
            break;

        case 2:
            query00 = `SELECT
                            *
                        FROM
                            adm.DOMINIOTIPO
                        WHERE
                            tipo_codigo = ${codigo}`;
            break;

        case 3:
            query00 = `SELECT
                            *
                        FROM
                            adm.DOMINIOTIPO
                        where
                            tipo_valor = '${valor}'`;
            break;

        default:
            break;
    }

    const connPGSQL = new Client(initPGSQL);
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code +' '+e.severity+', '+e.hint, 'Function: selectDOMINIOTIPO')
                .then(result => _data = result);
        }
    );

    if (_code == 200) {
        await connPGSQL
            .query(query00)
            .then(result => {
                _code = 200;
                _data = result.rows;
            })
            .catch(e => {
                _code = 500;
                console.log(e);
                errorBody(_code, 'Code: '+ e.code +' '+e.severity+', '+e.hint, 'Function: selectDOMINIOTIPO')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }

    return Array(_code, _data);
}

const selectEMPRESA = async(actionType, codigo, valor) => {
    let _code   = 200;
    let _data   = [];
    let query00 = '';

    switch (actionType) {
        case 1:
            query00 = `SELECT
                            *
                        FROM
                            adm.EMPRESA`;
            break;

        case 2:
            query00 = `SELECT
                            *
                        FROM
                            adm.EMPRESA
                        WHERE
                            empresa_codigo = ${codigo}`;
            break;

        case 3:
            query00 = `SELECT
                            *
                        FROM
                            adm.EMPRESA
                        where
                            empresa_ruc = '${valor}'`;
            break;

        case 4:
            query00 = `SELECT
                            *
                        FROM
                            adm.EMPRESA
                        WHERE
                            tipo_rubro_codigo = (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMEMPRESARUBRO' AND DOMFICPAR = ${codigo})`;
            break;

        default:
            break;
    }

    const connPGSQL = new Client(initPGSQL);
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: selectEMPRESA', true)
                .then(result => _data = result);
        }
    );

    if (_code == 200) {
        await connPGSQL
            .query(query00)
            .then(result => {
                _code = 200;
                _data = result.rows;
            })
            .catch(e => {
                _code = 500;
                errorBody(_code, 'Code: '+ e.code +' '+e.severity+', '+e.hint, 'Function: selectEMPRESA')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }

    return Array(_code, _data);
}

const selectSUCURSAL    = async(actionType, codigo, valor) => {
    let _code   = 200;
    let _data   = [];
    let query00 = '';

    switch (actionType) {
        case 1:
            query00 = `SELECT
                            *
                        FROM
                            adm.SUCURSAL`;
            break;

        case 2:
            query00 = `SELECT
                            *
                        FROM
                            adm.SUCURSAL
                        WHERE
                            sucursal_codigo = ${codigo}`;
            break;

        case 3:
            query00 = `SELECT
                            *
                        FROM
                            adm.SUCURSAL
                        where
                            empresa_codigo = ${codigo}`;
            break;

        case 4:
            query00 = `SELECT
                            *
                        FROM
                            adm.SUCURSAL
                        WHERE
                            tipo_sucursal_codigo = (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMSUCURSALTIPO' AND DOMFICPAR  = ${codigo})`;
            break;

        default:
            break;
    }

    const connPGSQL = new Client(initPGSQL);
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: selectSUCURSAL', true)
                .then(result => _data = result);
        }
    );

    if (_code == 200) {
        await connPGSQL
            .query(query00)
            .then(result => {
                _code = 200;
                _data = result.rows;
            })
            .catch(e => {
                _code = 500;
                errorBody(_code, 'Code: '+ e.code +' '+e.severity+', '+e.hint, 'Function: selectSUCURSAL')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }

    return Array(_code, _data);
}

const selectUSUARIO = async(actionType, codigo, valor) => {
        let _code   = 200;
        let _data   = [];
        let query00 = '';
        let _empresaCodigo = parseInt(valor.trim().substring(1, 4));

        switch (actionType) {
            case 1:
                query00 = `SELECT
                                *
                            FROM
                                adm.USUARIO`;
                break;

            case 2:
                query00 = `SELECT
                                *
                            FROM
                                adm.USUARIO
                            WHERE
                                usuario_codigo = ${codigo}`;
                break;

            case 3:
                query00 = `SELECT
                                *
                            FROM
                                adm.USUARIO
                            WHERE
                                usuario_documento  = ${valor}`;
                break;

            case 4:
                    query00 = `SELECT
                                    *
                                FROM
                                    adm.USUARIO
                                WHERE
                                    usuario_usuario   = ${valor} AND empresa_codigo = ${_empresaCodigo}`;
                               
                    break;

            case 5:
                query00 = `SELECT
                                *
                            FROM
                                adm.USUARIO
                            WHERE
                                empresa_codigo = ${codigo}`;
                break;
            
            case 6:
                query00 = `SELECT
                                *
                            FROM
                                adm.USUARIO
                            WHERE
                                sucursal_codigo  = ${codigo}`;
                break;

            default:
                break;
        }

        const connPGSQL = new Client(initPGSQL);
        await connPGSQL
            .connect()
            .catch(e => {
                _code = 401;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: selectUSUARIO', true)
                    .then(result => _data = result);
            }
        );
    
        await connPGSQL
            .query(query00)
            .then(result => {
                _code = 200;
                _data = result.rows;
            })
            .catch(e => {
                _code = 500;
                errorBody(_code, 'Code: '+ e.code +' '+e.severity+', '+e.hint, 'Function: selectUSUARIO')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    
        if (_data.length == 0) {
            _code = 404;
        }
        return Array(_code, _data);
    }
   
const selectUSUARIOEMPRESA = async(actionType, codigo, valor) => {
    let _code   = 200;
    let _data   = [];
    let query00 = '';

    switch (actionType) {
        case 1:
            query00 = `SELECT 
                            a.CLUSU									AS		usuario_usuario,
                            a.CLCON									AS		usuario_password,
                        
                            TRIM(b.FUNOM) +' '+TRIM(b.FNOMB2)		AS		usuario_nombre,
                            TRIM(b.FUAPE) +' '+TRIM(b.APELL2)		AS		usuario_apellido,
                            b.FUMAIL								AS		usuario_mail,
                            TRIM(b.FUCODCEL1) + TRIM(b.FUCEL1)      AS      usuario_celular
                        
                        FROM FSD050 a
                        INNER JOIN FUNCIONARI b ON a.FUCIC  = b.FUCIC

                        WHERE a.CKEMP = ${codigo} AND a.FUCIC = '${valor}'`;
            break;

        default:
            break;
    }

    await clientMSSQL.on('error', err => {
            _code = 401;
            errorBody(_code, 'Erro: '+ err + ', Function: selectUSUARIOEMPRESA', true)
                .then(result => _data = result);
    });

    if(_code == 200){
        await clientMSSQL.connect(initMSSQL01)
            .then(pool => {
                return pool.request().query(query00);
            })
            .then(result => {
                _data = result;
            })
            .catch(err => {
                _code = 401;
                console.log(err);
                errorBody(_code, 'Code: '+ err.code + ', OriginalError: ' + err.originalError + ', Function: selectUSUARIOEMPRESA', true)
                    .then(result => _data = result);
            })
            .then(() => {
                clientMSSQL.close();
            });
    }

    if (_data['rowsAffected'] == 0) {
        _code = 204;
        _data = await jsonBody(_code, 'Warning', 'selectUSUARIOEMPRESA', null, 'El documento ingresado no es existe', 0, 0, 0, 0, []);
    }
   
    return Array(_code, _data);
}


module.exports = {
    selectDOMINIOTIPO,
    selectEMPRESA, 
    selectSUCURSAL,
    selectUSUARIO,
    selectUSUARIOEMPRESA
};