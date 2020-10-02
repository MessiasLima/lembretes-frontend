import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

import { Lembrete } from "src/app/shared/models/lembrete";
import { AppKeys } from "src/app/core/keys/app-keys";

@Injectable({
    providedIn: "root",
})
export class LembreteService {
    confirmarExclusao = new EventEmitter();
    cancelarExclusao = new EventEmitter();
    edicaoLembrete = new BehaviorSubject(new Lembrete());
    exibirMensagemBemVindo = new BehaviorSubject(false);

    constructor(private http: HttpClient) {}

    salvarLembrete(lembrete: Lembrete) {
        return this.http.post<Lembrete>(AppKeys.apiUrl + `lembrete`, lembrete);
    }

    listarLembretes(pagina: number, qtdRegistros: number, pkUsuario: number) {
        const params = {
            pagina: pagina.toString(),
            qtdRegistros: qtdRegistros.toString(),
            pkUsuario: pkUsuario.toString(),
        };

        return this.http.get(AppKeys.apiUrl + `lembrete/listar-lembretes`, {
            params,
        });
    }

    contarLembretesUsuario(pkUsuario: number) {
        const params = { pkUsuario: pkUsuario.toString() };

        return this.http.get(
            AppKeys.apiUrl + `lembrete/total-lembretes-usuario`,
            {
                params,
            }
        );
    }

    listarLembretesPorTitulo(
        pagina: number,
        qtdRegistros: number,
        titulo: string,
        pkUsuario: number
    ) {
        const params = {
            pagina: pagina.toString(),
            qtdRegistros: qtdRegistros.toString(),
            titulo: titulo,
            pkUsuario: pkUsuario.toString(),
        };

        return this.http.get(
            AppKeys.apiUrl + `lembrete/listar-lembretes-por-titulo`,
            { params }
        );
    }

    excluirLembrete(pkLembrete: number) {
        const params = { pkLembrete: pkLembrete.toString() };

        return this.http.delete(AppKeys.apiUrl + `lembrete`, {
            params,
        });
    }
}
